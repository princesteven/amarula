import {doreenImage, karenImage, ruthImage, simonImage} from "../../../../public/images";

interface ManagerImages {
    name: string;
    title: string;
    description: string;
    image: any;
    imageDescription: string;
}

export const managers: ManagerImages[] = [
    {
        name: 'Doreen Assey',
        title: 'Director',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        imageDescription: 'Director',
        image: doreenImage,
    },
    {
        name: 'Karen Neroka',
        title: 'General Manager',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        imageDescription: 'General Manager',
        image: karenImage,
    },
    {
        name: 'Simon Assey',
        title: 'Operations Manager',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        imageDescription: 'General Manager',
        image: simonImage,
    },
    {
        name: 'Ruth Assey',
        title: 'Assistant General Manager',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        imageDescription: 'General Manager',
        image: ruthImage,
    },
]