import { Component, OnInit } from "@angular/core";
import { IProject } from "src/components/project/project.component";
import { ISkill } from "src/components/skill/skill.component";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    public skills: ISkill[] = [
        {
            name: 'HTML',
            experience: '3 years Experience',
            hoverColor: 'orange'
        },
        {
            name: 'CSS',
            experience: '3 years Experience',
            hoverColor: 'blue'
        },
        {
            name: 'SCSS',
            experience: '3 years Experience',
            hoverColor: 'red'
        },
        {
            name: 'JavaScript',
            experience: '3 years Experience',
            hoverColor: 'yellow'
        },
        {
            name: 'TypeScript',
            experience: '3 years Experience',
            hoverColor: 'blue'
        },
        {
            name: 'Angular',
            experience: '3 years Experience',
            hoverColor: 'red'
        },
        {
            name: 'Express',
            experience: '3 years Experience',
            hoverColor: 'green'
        },
    ]

    public projects: IProject[] = [
        {
            name: 'Kanban Task Management App',
            technologiesUsed: 'Angular,NgRx',
            imgUrl: 'assets/kanban-task.PNG',
            empty: false,
            link: 'https://beautiful-fenglisu-74d90d.netlify.app/'
        },
        {
            name: 'Invoice App',
            technologiesUsed: 'Angular,RxJS,TailwindCSS',
            imgUrl: 'assets/invoice-app.PNG',
            empty: false,
            link: 'https://luxury-conkies-443a7a.netlify.app/'
        },
    ];

}