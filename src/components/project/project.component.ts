import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

    @Input()
    public project!: IProject;

    ngOnInit() {
        this.project.imgUrl = this.project.imgUrl || '../../assets/cone.png';
    }

    openExternalLink(): void {
        if (!this.project.link) return;
        window.open(this.project.link, '_blank');
    }
}

export interface IProject {
    name?: string;
    technologiesUsed?: string;
    imgUrl?: string;
    link?: string,
    empty: boolean;
}