function convertTemp(temp: number): string {
    const celsius = temp - 273.15;
    return celsius.toFixed(1);
}

export { convertTemp };