import Vue from 'vue'
import {DateTime as LuxonDateTime, Settings as LuxonSettings} from 'luxon'
import Datetime from '../../dist/vue-datetime'
import '../../dist/vue-datetime.css'
import './app.css'

LuxonSettings.defaultLocale = 'es'
Vue.use(Datetime)

const mainDate = LuxonDateTime.local()
const date = mainDate.startOf('day').toISO()
const time = mainDate.toFormat('TIME_24_SIMPLE')
const datetime = mainDate.toISO()
const datetime12 = mainDate.toISO()
const datetime13 = mainDate.toISO()

new Vue({
  el: '#app',

  data () {
    return {
      time,
      date,
      datetime,
      datetime12,
      datetime13,
      datetimeEmpty: '',
      minDatetime: LuxonDateTime.local().minus({ month: 1, days: 3 }).toISO(),
      maxDatetime: LuxonDateTime.local().plus({ days: 3 }).toISO(),
      datetimeTheming: LuxonDateTime.local().toISO()
    }
  }
})

