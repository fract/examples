import styles from './menu.scss'
import { list, Fractal, List, Context } from 'whatsup'
import { Api } from 'loadable/api'
import { Item, ItemLoader } from './item'
import { WhatsJSX } from '@whatsup/jsx'
import { connect } from 'loadable/utils'

export class Menu extends Fractal<JSX.Element> {
    list!: List<Item>

    async loadMenuItemList() {
        if (!this.list) {
            this.list = list((await Api.loadMenuIds()).map((id) => new Item(id)))
        }
    }

    *whatsUp(ctx: Context) {
        ctx.defer(() => this.loadMenuItemList())

        yield <MenuLoader />

        while (true) {
            yield <Container>{yield* connect(this.list)}</Container>
        }
    }
}

function MenuLoader() {
    return (
        <Container>
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
        </Container>
    )
}

function Container({ children }: WhatsJSX.Attributes) {
    return <div className={styles.container}>{children}</div>
}
