<template>
    <div v-html="scaledIcon" :class="iconClass"></div>
</template>

<script>
import * as icons from "@/icons/icons"

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        iconClass: {
            type: String,
            default: '',
        },
        size: {
            type: [String, Number],
            default: 24,
        },
    },
    data() {
        return {
            icons
        }
    },
    computed: {
        scaledIcon() {
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(icons[this.icon], 'image/svg+xml');
            const svgElement = svgDoc.querySelector('svg');

            if (svgElement) {
                svgElement.setAttribute('width', this.size);
                svgElement.setAttribute('height', this.size);
                
                return svgElement.outerHTML;
            }

            return this.icon;
        },
    },

};
</script>

<style scoped>
/* Add styles if needed */
</style>