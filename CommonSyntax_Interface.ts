interface JSONResponse {
    update: (retryTimes: number) => void; // Function type
    // update(retryTimes: number): void; // Function declaration in interface
}

// Example:
const response: JSONResponse = {
    update(retryTimes: number): void {
        console.log(`Retrying ${retryTimes} times`);
    },
};

response.update(3);
