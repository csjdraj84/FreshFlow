const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const ORDER_DATA_DIR = path.join(__dirname, '../Order Data');
const OUTPUT_FILE = path.join(__dirname, '../data/items.json');

async function ingestPdfs() {
    const files = fs.readdirSync(ORDER_DATA_DIR).filter(f => f.endsWith('.pdf'));

    if (files.length === 0) {
        console.log("No PDFs found.");
        return;
    }

    const allItems = new Set();
    const itemDetails = new Map(); // name -> object

    for (const file of files) {
        console.log(`Processing ${file}...`);
        const filePath = path.join(ORDER_DATA_DIR, file);
        const dataBuffer = fs.readFileSync(filePath);

        try {
            const data = await pdf(dataBuffer);
            const text = data.text;
            const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

            // Parsing logic
            // Look for price line "S$xx.xx"
            // The line before it is usually the item name.

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                if (line.startsWith('S$') && !isNaN(parseFloat(line.substring(2)))) {
                    // This is a price line.
                    const prevLine = lines[i - 1];

                    // Filter out non-item headers
                    if (
                        prevLine.includes('Subtotal:') ||
                        prevLine.includes('Total:') ||
                        prevLine.includes('GST:') ||
                        prevLine.includes('Delivery:') ||
                        prevLine.includes('Promotion(s)') ||
                        prevLine === 'Payment method'
                    ) {
                        continue;
                    }

                    // Basic cleanup of item name
                    let name = prevLine;

                    // If name is very short or looks like a date/number/header, skip
                    if (name.length < 3) continue;

                    // Store
                    if (!allItems.has(name)) {
                        allItems.add(name);
                        itemDetails.set(name, {
                            name: name,
                            // Placeholder image until we implement search
                            imageUrl: '',
                            tamilName: '' // To be filled
                        });
                    }
                }
            }
        } catch (e) {
            console.error(`Failed to parse ${file}:`, e);
        }
    }

    console.log(`Found ${allItems.size} unique items.`);

    const items = Array.from(itemDetails.values());

    // Ensure data dir
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(items, null, 2));
    console.log(`Saved to ${OUTPUT_FILE}`);
}

ingestPdfs();
