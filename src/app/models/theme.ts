export class Theme {
  target_section : string;
  target_name : string;

  primary_color : string;
  lighter_color : string;

  constructor(target_section : string, target_name : string, primary_color : string, lighter_color: string) {
    this.target_section = target_section;
    this.target_name = target_name;
    this.primary_color = primary_color;
    this.lighter_color = lighter_color;
  }

  public apply() {
    document.documentElement.style.setProperty("--theme-primary", this.primary_color);
    document.documentElement.style.setProperty("--theme-lighter", this.lighter_color);
  }
}
