import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerData: any;
  @Input() title!: string; 
  @Input() subtitle!: string; 
  @Input() icon!: string;
  @Input() infoTitle!: string; 
  @Input() infoSubtitle!: string; 
  @Input() bannerImage!: string; 
  @Input() verifiedText!: string;
  @Input() verifiedSubtitle!: string; 
}
