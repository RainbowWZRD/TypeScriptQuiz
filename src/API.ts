
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestion = async (amount : number, difficulty : Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
    const data = await (await fetch(endpoint)).json()
    console.log(data)
}