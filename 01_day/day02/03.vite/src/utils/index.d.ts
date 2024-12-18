declare const add: (a: number, b: number) => number

type Position = {
    x: number
    y: number
}

declare const point: (p: Position) => void

export { add, point }