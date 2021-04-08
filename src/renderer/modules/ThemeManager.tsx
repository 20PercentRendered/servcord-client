import Logger from './Logger';

export type Theme = {
    name: string
    primaryColor: string
    secondaryColor: string
    tertiaryColor: string
}
export default class ThemeManager {
  private currentTheme = 'default';

  private logger: Logger = new Logger('ThemeManager');

  private setTheme(theme: Theme): void {
    if (this.currentTheme === theme.name) {
      return;
    }
    this.logger.info(`Switching theme from ${this.currentTheme} to ${theme.name}`);
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.documentElement.style.setProperty('--tertiary-color', theme.tertiaryColor);
    this.currentTheme = theme.name;
  }

  GetTheme(): string {
    return this.currentTheme;
  }

  SetDarkTheme(): void {
    this.setTheme({
      name: 'dark',
      primaryColor: '#292b2e',
      secondaryColor: '#242528',
      tertiaryColor: '#18191b',
    });
  }

  SetBlackTheme(): void {
    this.setTheme({
      name: 'dark',
      primaryColor: 'black',
      secondaryColor: 'black',
      tertiaryColor: 'black',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  SetCustomTheme(theme: Theme): void {
    this.setTheme(theme);
  }
}
