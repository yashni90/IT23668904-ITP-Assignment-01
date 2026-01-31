const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
  { 
    id: 'Pos_Fun_0001', 
    name: 'Simple sentences', 
    input: 'api bath kanavaa.', 
    expected: 'අපි බත් කනවා.' 
  },
 
  { 
    id: 'Pos_Fun_0002', 
    name: 'Compound sentences', 
    input: 'mama vaeda karanavaa namuth mata nidhimatha aavaa.', 
    expected: 'මම වැඩ කරනවා නමුත් මට නිදිමත ආවා.' 
  },

  { 
    id: 'Pos_Fun_0003', 
    name: 'Complex sentences', 
    input: 'mahansi unath mama vaeda karanavaa.', 
    expected: 'මහන්සි උනත් මම වැඩ කරනවා.' 
  },

  { 
    id: 'Pos_Fun_0004', 
    name: ' Interrogative forms', 
    input: 'oyaata pothak aran dhenna puluvandha?', 
    expected: 'ඔයාට පොතක් අරන් දෙන්න පුලුවන්ද?' 
  },

  { 
    id: 'Pos_Fun_0005', 
    name: ' Imperative forms', 
    input: 'eeka gihin dhenna.', 
    expected: 'ඒක ගිහින් දෙන්න.' 
  },

  { 
    id: 'Pos_Fun_0006', 
    name: ' Positive forms', 
    input: 'oyaa eeka hariyatama kiyavanavaa.', 
    expected: 'ඔයා ඒක හරියටම කියවනවා.' 
  },

  { 
    id: 'Pos_Fun_0007', 
    name: ' Negative forms', 
    input: 'eyaa kavadhaavath ehema karanne naehae.', 
    expected: 'එයා කවදාවත් එහෙම කරන්නේ නැහැ.' 
  },

  { 
    id: 'Pos_Fun_0008', 
    name: 'Simple Greeting', 
    input: 'oyaata kohomadha?', 
    expected: 'ඔයාට කොහොමද?' 
  },

  { 
    id: 'Pos_Fun_0009', 
    name: 'Polite Requests', 
    input:'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', 
    expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' 
  },

   { 
    id: 'Pos_Fun_0010', 
    name: 'Polite Responses', 
    input:'samaavenna, mata eka karanna bae.', 
    expected:'සමාවෙන්න, මට එක කරන්න බැ.' 
  },

  { 
    id: 'Pos_Fun_0011', 
    name: 'Polite phrasing', 
    input:'samaavenna, mata podi prashnayak ahanna puLuvandha?', 
    expected:'සමාවෙන්න, මට පොඩි ප්‍රශ්නයක් අහන්න පුළුවන්ද?' 
  },

  { 
    id: 'Pos_Fun_0012', 
    name: 'Informal phrasing', 
    input:' eeyi, oya potha dhiyan.', 
    expected:'ඒයි, ඔය පොත දියන්.' 
  },

  { 
    id: 'Pos_Fun_0013', 
    name: ' Frequently used day-to-day expressions', 
    input:'mata badagini.', 
    expected:'මට බඩගිනි.' 
  },

  { 
    id: 'Pos_Fun_0014', 
    name: ' Multi-word expressions and frequent collocations', 
    input:'podi udhavvak.', 
    expected:'පොඩි උදව්වක්.' 
  },

  { 
    id: 'Pos_Fun_0015', 
    name:'Proper spacing', 
    input:'oyaa eeka hariyata balanna.', 
    expected:'ඔයා ඒක හරියට බලන්න.' 
  },

  { 
    id: 'Pos_Fun_0016', 
    name: ' Missing spaces', 
    input:'mamahetayaaLuvagegedharayanavaa.', 
    expected:'මමහෙටයාළුවගෙගෙදරයනවා.' 
  },

  { 
    id: 'Pos_Fun_0017', 
    name: 'Slang and colloquial phrasing', 
    input:'ehema nam hari loku dheyak!', 
    expected:'එහෙම නම් හරි ලොකු දෙයක්!' 
  },

   { 
    id: 'Pos_Fun_0018', 
    name: ' Past Tense variation', 
    input:'mama iiyee naetum panthi giyaa.', 
    expected:'මම ඊයේ නැටුම් පන්ති ගියා.' 
  },

  { 
    id: 'Pos_Fun_0019', 
    name: ' Present Tense variation', 
    input:'mama vathura bonavaa.', 
    expected:'මම වතුර බොනවා.' 
  },

    { 
    id: 'Pos_Fun_0020', 
    name: ' Keep places and common words unchanged', 
    input:'Report tika complete karalaa mata email ekak evanna.', 
    expected:'Report ටික complete කරලා මට email එකක් එවන්න.' 
  },

  { 
    id: 'Pos_Fun_0021', 
    name: 'Plural usage and pronoun variations', 
    input: 'Eyaalaa gedhara giyaa.', 
    expected: 'එයාලා ගෙදර ගියා.' 
  },

   { 
    id: 'Pos_Fun_0022', 
    name: 'Complex sentences', 
    input: 'eyaa kiivoth api patan gannavaa.', 
    expected: 'එයා කීවොත් අපි පටන් ගන්නවා.' 
  },

   { 
    id: 'Pos_Fun_0023', 
    name: 'Compound sentences', 
    input: 'Mama paarata yanavaa, namuth vaessa vahina nisaa dhaenma yannee naehae.', 
    expected: 'මම පාරට යනවා, නමුත් වැස්ස වහින නිසා දැන්ම යන්නේ නැහැ.' 
  },

  { 
    id: 'Pos_Fun_0024', 
    name: 'Compound sentences', 
    input: 'eyaa enavaa kiyalaa kiivaa.namuth thaama aavee naee.', 
    expected: 'එයා එනවා කියලා කීවා.නමුත් තාම ආවේ නෑ.' 
  },

];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    // Input: Singlish text box [cite: 303]
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputArea.pressSequentially(scenario.input, { delay: 30 });

    // Output: The specific results div we found in your DevTools
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // Verification: Real-time update check [cite: 372, 392]
    await expect(outputDiv).not.toBeEmpty({ timeout: 10000 });
    
    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    // Requirements check: Save a screenshot for your report evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // Status Check
    // Note: For Neg_Fun tests, you might expect the output to be messy
    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}