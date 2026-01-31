const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
  { 
    id: 'Neg_Fun_0001', 
    name: 'Present Tense variations', 
    input: 'ammaa bath uyanawaa.', 
    expected: 'අම්මා බත් උයනවා.' 
  },

  { 
    id: 'Neg_Fun_0002', 
    name: 'Future Tense variations', 
    input: ' api iilaga sathiyee yaaLuvage gedara yamu.', 
    expected: ' අපි ඊලග සතියේ යාළුවගෙ ගෙදර යමු.' 
  },

   { 
    id: 'Neg_Fun_0003', 
    name: 'Negation patterns', 
    input: 'aththatama mama eeka dhanne naehae.', 
    expected: ' ඇත්තටම මම ඒක දන්නෙ නැහැ.' 
  },

  { 
    id: 'Neg_Fun_0004', 
    name: 'English technical/brand terms', 
    input: 'ee haloo linkedIn ekee thibba job vacancy ekata oyaa apply karaada?eekee link eka mata hoyaganna bae.ee link eka mata whatsapp evanna puLuvanda matath eekata apply karanna.puLuvannam dhaen link mata evanavada?closing date eka pahuvelaada dhanneth naehae.', 
    expected: ' ඒ හලෝ linkedIn එකේ තිබ්බ job vacancy එකට ඔයා apply කරාද?ඒකේ link එක මට හොයගන්න බැ.ඒ link එක මට whatsapp එවන්න පුළුවන්ද මටත් ඒකට apply කරන්න.පුළුවන්නම් දැන් link මට එවනවද?closing date එක පහුවෙලාද දන්නෙත් නැහැ.' 
  },

  { 
    id: 'Neg_Fun_0005', 
    name: 'Currency, time formats, dates, and units of measurement', 
    input: 'Mama dhesaembar 25 geyak gaththa.eeka unaa Rs.120,0000.  eeke getagevadhiima heta udhee 8.30 AM. eekee chaarithra valata kiri 1L geenna mama kadeta yanawaa.anith badu tika mama iiyee sathipoLen ammath ekka gihin gaththaa.', 
    expected: 'මම දෙසැම්බර් 25 ගෙයක් ගත්තා.ඒක උනා Rs.120,0000.  ඒකෙ ගෙටගෙවදීම හෙට උදේ 8.30 AM. ඒකේ චාරිත්‍ර වලට කිරි 1L ගේන්න මම කඩේට යනවා.අනිත් බඩු ටික මම ඊයේ සතිපොළෙන් අම්මත් එක්ක ගිහින් ගත්තා. ' 
  },

    { 
    id: 'Neg_Fun_0006', 
    name: 'Multiple spaces', 
    input: 'mama   nuvaraEliye yanna   hadannee.', 
    expected: ' මම නුවරඑලියෙ යන්න හදන්නේ.' 
  },

  { 
    id: 'Neg_Fun_0007', 
    name: 'Negation patterns', 
    input: 'mata eeka bee.',
    expected: 'මට ඒක බෑ.'
  },

  {
    id: 'Neg_Fun_0008', 
    name: 'Slang and colloquial phrasing', 
    input: 'siraavata kiyannam, mata eeka hari lassanai.',
    expected: 'සිරාවට කියන්නම්, මට ඒක හරි ලස්සනයි.'
  },

  { 
    id: 'Neg_Fun_0009', 
    name: 'Repeated word expressions ', 
    input: 'ba ba',
   expected: 'බැ බැ'
  },

  { 
    id: 'Neg_Fun_0010', 
    name: 'English abbreviations and short forms', 
    input: 'oyage NIC eka saha ID eka aragena enna kiyala SMS ekak dhaalaa thibbaa',
   expected: 'ඔයාගෙ NIC එක සහ ID එක අරගෙන එන්න කියලා SMS එකක් දාලා තිබ්බා.'
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
    if (scenario.id.startsWith('Neg')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}