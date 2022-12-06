const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.airbnb.mx/');
  await page.getByRole('button', { name: 'Cerrar' }).click();
  await page.getByRole('button', { name: 'Ubicación Cualquier lugar' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('bar');
  await page.getByText('Barcelona, España').click();
  await page.getByRole('button', { name: 'Haz clic en la flecha de la derecha para cambiar al mes siguiente.' }).click();
  await page.getByRole('button', { name: 'Haz clic en la flecha de la derecha para cambiar al mes siguiente.' }).click();
  await page.getByRole('button', { name: 'Haz clic en la flecha de la derecha para cambiar al mes siguiente.' }).click();
  await page.getByRole('button', { name: 'Haz clic en la flecha de la derecha para cambiar al mes siguiente.' }).click();
  await page.getByRole('button', { name: 'Haz clic en la flecha de la derecha para cambiar al mes siguiente.' }).click();
  await page.getByRole('button', { name: 'Haz clic en la flecha de la derecha para cambiar al mes siguiente.' }).click();
  await page.locator('div:nth-child(3) > ._ytfarf > ._cvkwaj > tbody > tr > ._61wmwdf').click();
  await page.locator('div:nth-child(3) > ._ytfarf > ._cvkwaj > tbody > tr:nth-child(2) > td:nth-child(6)').click();
  await page.getByTestId('structured-search-input-field-guests-button').click();
  await page.getByTestId('stepper-adults-increase-button').click();
  await page.getByTestId('stepper-adults-increase-button').click();
  await page.getByTestId('stepper-children-increase-button').click();
  await page.getByTestId('stepper-children-increase-button').click();
  await page.getByTestId('stepper-pets-increase-button').click();
  await page.getByTestId('structured-search-input-search-button').click();
  await page.getByRole('button', { name: 'Filtros' }).click();
  await page.getByLabel('precio máximo$').click();
  await page.getByLabel('precio máximo$').fill('4000');
  await page.getByRole('link', { name: 'Mostrar 931 alojamientos' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('.rfexzly').first().click()
  ]);
  await page1.getByRole('button', { name: 'Cerrar' }).click();
  await page1.getByRole('button', { name: 'Mostrar todas las fotos' }).filter({ hasText: 'Mostrar todas las fotos' }).click();
  await page1.getByRole('button', { name: 'Cerrar' }).click();
  await page1.getByRole('heading', { name: 'Política de cancelación' }).dblclick();

  // ---------------------
  await context.close();
  await browser.close();
})();