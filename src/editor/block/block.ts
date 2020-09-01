import { Fractal, fraction, fractal } from '@fract/core'
import { Tree } from './tree'
import { Data } from './data'
import { Style } from './style'
import { View } from './view'
import { BRANCH, Branch } from '../factors'

export type Block = Fractal<any>

export interface BlockData {
    // main
    tagName: string
    // styles
    width: string
    height: string
    border: string
    borderRadius: string
    background: string
    // children
    children: BlockData[]
}

export function newBlock(data = {} as BlockData): Block {
    const {
        tagName = 'div',
        width = 'auto',
        height = 'auto',
        border = 'none',
        borderRadius = 'none',
        background = 'unset',
        children = [],
    } = data

    const key = (~~(Math.random() * 1e8)).toString(16)

    const TagName = fraction(tagName)

    const Width = fraction(width)
    const Height = fraction(height)
    const Border = fraction(border)
    const BorderRadius = fraction(borderRadius)
    const Background = fraction(background)

    const Children = fraction<Block[]>(children.map((data) => newBlock(data)))

    const Self: Block = fractal(async function* _Block() {
        switch (yield* BRANCH) {
            case Branch.View:
                yield* View({ key, TagName, Width, Height, Border, BorderRadius, Background, Children })
                break
            case Branch.Style:
                yield* Style({ key, Width, Height, Border, BorderRadius, Background })
                break
            case Branch.Tree:
                yield* Tree({ key, Self, TagName, Children })
                break
            case Branch.Data:
                yield* Data({ TagName, Width, Height, Border, BorderRadius, Background, Children })
                break
        }
    })

    return Self
}
