import Chance from "chance";
const chance = new Chance();

export const fakeUserData = () => {
    return `${chance.name()}, ${chance.country({ full: true })}`;
}
