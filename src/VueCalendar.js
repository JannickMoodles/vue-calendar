import Vue from 'vue';
import Calendar from './components/Calendar/Calendar.vue';

/* Event bus */
window.Event = new Vue({});

const VueCalendar = {
	install(Vue, options) {
		Vue.component('calendar', Calendar);
	}
}

export default VueCalendar;