const thousandSeparator = (input: string | number) : string => {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export {
    thousandSeparator
}
