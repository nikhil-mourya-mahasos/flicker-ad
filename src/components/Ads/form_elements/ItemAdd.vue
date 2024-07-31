<template>
    <div class="">
        <label v-if="label" class="block font-bold text-xs text-gray-900">{{ label }}</label>
        <div>
            <form @submit.prevent="addItem()">
                <div class="flex flex-row justify-start gap-3 flex-wrap mb-2 " v-if="result.length">
                    <p class="text-xs border p-2 rounded-md flex" v-for="item, index in result" :key="index">
                        {{ item }}
                        <span @click="removeItem(index)" class="material-icons-outlined ml-4 hover:scale-125 transition-all duration-100 cursor-pointer"
                            style="font-size:14px;">delete</span>
                    </p>
                </div>
                <div class="flex justify-start gap-5 items-center">
                    <input v-model="item" :maxlength="maxLength" :placeholder="placeholder" required type="text"
                        class="flex-grow border rounded-lg border-gray-300 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 " />
                    <div class="">
                        <button type="submit" class="primary-bg p-1 px-3 text-white rounded-lg flex items-center"><span
                                class="material-icons" style="font-size:18px;">add</span><span> {{ buttonText }}</span></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ItemAdd',
    props: {
        'value': { type: Array, required: true },
        'label': { type: String, default: '' },
        'buttonText': { type: String, default: '' },
        'placeholder': { type: String, default: '' },
        'maxLength': { type: [String, Number], default: 30 },
        'maxItems': { type: [String, Number], default: 15 },
        'limitMaxItems': { type: Boolean, default: true },
    },
    data() {
        return {
            item: '',
            result: this.value,
        }
    },
    methods: {
        addItem() {
            if (this.limitMaxItems) {
                if (this.result.length >= this.maxItems) {
                    this.$fpError(`Max list of ${this.label.toLowerCase()} is reached. Please add full list of ${this.label.toLowerCase()} in post details.`);
                    return false;
                }
            }
            if (!this.result.includes(this.item)) {
                this.result.push(this.item);
                this.$emit('input', this.result);
                this.item = '';
            }
        },
        removeItem(index){
            this.result.splice(index,1);
        }
    }
}
</script>
<style lang="scss" scoped>
input::placeholder,
input::-webkit-input-placeholder {
    font-size: 15px;
}

button {
    border-top-right-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
}
</style>