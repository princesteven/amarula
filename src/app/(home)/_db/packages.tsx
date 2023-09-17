import {
    bbqFacadePackage,
    campingPackage,
    hikingPackage,
    honeymoonPackage,
    safariPackage
} from "../../../../public/images";

interface Package {
    name: string;
    stars: number;
    description: string;
    image: any;
    imageDescription: string;
}

export const packages: Package[] = [
    {
        name: "Camping",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        image: campingPackage,
        imageDescription: "Family camping"
    },
    {
        name: "Hiking",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        image: hikingPackage,
        imageDescription: "Hiking Adventures"
    },
    {
        name: "Safari Tour",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        image: safariPackage,
        imageDescription: "Tour mikumi"
    },
    {
        name: "Honeymoon",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        image: honeymoonPackage,
        imageDescription: "We always make room for love"
    },
    {
        name: "BBQ Facade",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eligendi ipsum molestias necessitatibus omnis rerum ut.",
        image: bbqFacadePackage,
        imageDescription: "Fry and grill"
    },
]