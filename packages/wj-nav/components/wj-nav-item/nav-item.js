import { default as WJElement } from '/templates/net/assets/js/components/wj-element.js?v=@@version@@';
import '/templates/net/assets/js/components/wj-dropdown/wj-dropdown.js?v=@@version@@';

export class NavItem extends WJElement {
    constructor( { data, actions, nav } ) {
        super();

        this.data = data;
        this.actions = actions;
        this.nav = nav;
        this.classList.add('nav-item');
        this.store.subscribe('item-' + data.id, ( state ) => {});
    }

    draw( context, store, params ) {
        let fragment = document.createDocumentFragment();

        let anchor = document.createElement('a');
        anchor.classList.add('nav-tabs-primary');
        anchor.innerHTML = this.data.tab || this.data.name;
        if( this.data.active ) {
            anchor.classList.add('active');
        }

        fragment.append(anchor);

        if( this.actions.length > 0 && !this.data.hideMenu ) {
            let dropdown = document.createElement('wj-dropdown');
            dropdown.setAttribute('slot-button', 'true');
            dropdown.setAttribute('position', 'bottom-left');
            dropdown.setAttribute('hide-icon', 'true');
            dropdown.setAttribute('collapse', 'true');

            let dropdownButton = document.createElement('i');
            dropdownButton.classList.add('fa-light', 'fa-ellipsis-vertical');
            dropdownButton.setAttribute('slot', 'button');
            dropdown.appendChild(dropdownButton);

            this.actions.forEach(item => {
                let menu = document.createElement('div');
                menu.classList.add('wj-dropdown-item', 'dropdown-item');
                if( item.element ) {
                    menu.append(item.element({...item, ...this.data}));
                } else {
                    menu.innerHTML = `${item.icon || '<i class="fa-light fa-pen-to-square"></i>'} ${item.title}`;
                }

                menu.addEventListener('click', ( e ) => {
                    item.wjClick(e, this, anchor);
                });
                dropdown.appendChild(menu);
            });

            fragment.append(dropdown);
        }

        return fragment;
    }

    afterDraw( context, store, params ) {
        this.context.querySelector('a').addEventListener('click', this.dispatchChange);
    }

    dispatchChange = ( ev ) => {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();

        this.dispatchEvent(new CustomEvent('wj-nav-change', {
            bubbles: true,
            composed: true,
            detail: {
                tab: this,
                data: this.data,
                nav: this.nav,
            },
        }));
    };

    beforeDisconnect() {
        this.store.dispatch(this.defaultStoreActions.deleteAction('item-' + this.data.id)({}));
        this.context.querySelector('a').removeEventListener('click', this.dispatchChange);
    }
}

window.customElements.define('wj-nav-item', NavItem);