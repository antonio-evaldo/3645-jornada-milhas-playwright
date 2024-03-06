import { Locator, Page, expect } from "@playwright/test";

export default class PaginaLogin {
  private readonly page: Page;
  private readonly botaoLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.botaoLogin = page.getByTestId('botao-login');
  }

  async visitar() {
    await this.page.goto('/');
    await this.botaoLogin.click();
    await expect(this.page).toHaveURL('/auth/login');
  }
}