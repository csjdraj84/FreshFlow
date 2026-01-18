const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const ORDER_DATA_DIR = path.join(__dirname, '../Order Data');

async function debugPdf() {
    const files = fs.readdirSync(ORDER_DATA_DIR).filter(f => f.endsWith('.pdf'));

    if (files.length === 0) {
        console.log("No PDFs found.");
        return;
    }

    const firstFile = path.join(ORDER_DATA_DIR, files[0]);
    console.log(`Reading ${files[0]}...`);

    const dataBuffer = fs.readFileSync(firstFile);
    const data = await pdf(dataBuffer);

    console.log("--- PDF RAW TEXT START ---");
    console.log(data.text);
    console.log("--- PDF RAW TEXT END ---");
}

debugPdf();
