app.component('app-item', {
    props: {
        unit: Object
    },
    template: 
    /*html*/
    `
    <div class="block">
        <div>
        {{unit.name}}
        <button v-if="isFolder" @click="showFile">{{open ? '-': '+'}}</button>
        <input v-if="!isFolder" type="checkbox" @change="selectItem">
        </div>
        <section v-show="open">
            <app-item class="item" 
            v-for="unit in unit.children"
            :key="unit.name"
            :unit="unit"
            @pass-value="passValue" />
        </section>
        
    </div>
    `,
    data(){
        return {
            open: false,
            checked: false
        }
    },
    methods: {
        showFile() {
            this.open = !this.open
        },
        passValue(item) {
            this.$emit('pass-value', item)
        },
        selectItem() {
            this.checked = !this.checked
            let object = {
                name: this.unit.name,
                path: this.unit.path,
                checked: this.checked
              }
            this.$emit('pass-value', object)
        },
        mounted(){
            this.$root.$on('message', "alo 12312321321")
           }
    },
    computed: {
        isFolder() {
            return this.unit.children && this.unit.children.length
        }
    }
})