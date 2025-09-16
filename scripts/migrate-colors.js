#!/usr/bin/env node
/**
 * Color Migration Script
 * Updates hard-coded colors to use brand color system
 */

const fs = require('fs');
const path = require('path');

// Color mappings from hard-coded colors to brand colors
const colorMappings = {
  // Orange variants to Bitcoin colors
  'bg-orange-500': 'bg-bitcoin-500',
  'text-orange-500': 'text-bitcoin-500',
  'border-orange-500': 'border-bitcoin-500',
  'hover:bg-orange-600': 'hover:bg-bitcoin-600',
  'hover:text-orange-600': 'hover:text-bitcoin-600',
  'from-orange-500': 'from-bitcoin-500',
  'to-orange-600': 'to-bitcoin-600',
  
  // Status colors remain semantic
  'bg-green-500': 'bg-emerald-500', // Keep semantic meaning
  'bg-red-500': 'bg-red-500', // Keep for errors
  'bg-blue-500': 'bg-blue-500', // Keep for info
  
  // Update specific hard-coded gradients
  'from-green-500 to-emerald-600': 'from-emerald-500 to-emerald-600',
  'from-blue-500 to-indigo-600': 'from-blue-500 to-indigo-600',
  'from-purple-500 to-violet-600': 'from-purple-500 to-violet-600',
  'from-cyan-500 to-teal-600': 'from-cyan-500 to-teal-600',
  'from-orange-500 to-red-500': 'from-orange-500 to-red-500',
};

// Files to process
const filesToProcess = [
  'src/components/sections/Hero.tsx',
  'src/components/sections/QuickStart.tsx', 
  'src/components/sections/Education.tsx',
  'src/components/sections/Resources.tsx',
  'src/components/sections/Participate.tsx',
  'src/components/sections/JoinBitcoin.tsx',
  'src/components/layout/Footer.tsx',
  'src/app/en/chain/bitcoin1usd/page.tsx',
  'src/app/en/chain/1bitcoin1/page.tsx',
  'src/app/en/chain/bitcoing1/page.tsx',
  'src/app/en/chain/btc1ai/page.tsx',
  'src/app/en/chain/btc-quantum/page.tsx'
];

function replaceColorsInFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Apply color mappings
  Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
    const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(oldColor)) {
      content = content.replace(regex, newColor);
      hasChanges = true;
      console.log(`  ✅ ${oldColor} → ${newColor}`);
    }
  });
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`📝 Updated: ${filePath}`);
  } else {
    console.log(`✨ No changes needed: ${filePath}`);
  }
}

console.log('🎨 Starting Color System Migration...\n');

filesToProcess.forEach(filePath => {
  console.log(`\n🔍 Processing: ${filePath}`);
  replaceColorsInFile(filePath);
});

console.log('\n✅ Color migration completed!');
console.log('\n📋 Summary:');
console.log('- Updated hard-coded colors to use brand color system');  
console.log('- Maintained semantic colors for status indicators');
console.log('- All colors now centrally managed via Tailwind config');
