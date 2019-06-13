import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    @Input() videoID: string;
    fullVideoURL;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.fullVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoID);
    }

}
