function collectPuzzle(...puzzles) {
const a = redPuzzles.concat(bluePuzzles,greenPuzzles)
return [...new Set(a)]
}