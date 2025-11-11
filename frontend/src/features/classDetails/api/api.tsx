
export const createComment = (
    subject: string,
    teachingUnit: string,
    learned: string,
    goodPoint: string,
    issue: string,
) => {
    const prompt = {subject, teachingUnit, learned, goodPoint, issue}
    return JSON.stringify(prompt);
}

export const getClassesByDate: 