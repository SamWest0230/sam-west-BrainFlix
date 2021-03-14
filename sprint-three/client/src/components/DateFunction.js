
//Function Used on Main Video and Comments to transform the timestamp into a human date
export const newDay = (time) => {
    let day = time;
    let today = new Date(day)
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;

    return today;
}