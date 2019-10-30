export function formValidation(number, comment) {

    let count = 0;

    [...number].forEach((el) => {
        if(el.match(/[a-zA-Z]/)){
            count++;
        }
    })

    return (comment.length < 160) && (count > 3) ? true : false;

}