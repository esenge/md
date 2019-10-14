<template>
  <div>
    <div class="css-grid-container">
      <div class="currency-box">
        <div  class="css-grid checked-container">
          <div v-for="(checkedCurrency, index) in checkedCurrencies" :key="index" class="currency-item">
            <span>{{ checkedCurrency.name }}</span>
            <span class="currency-item--close" @click="unselectCurrency(checkedCurrency)">x</span>
          </div>
        </div>
        <div class="css-grid currencies-container">
          <label v-for="(currency, index2) in currencyList" :key="index2" class="currency-item" :for="'currency-' + index2" :class="{'currency-item--checked' : currency.checked}">
            <input type="checkbox" v-model="currency.checked" @change="chooseCurrency(currency)" :id="'currency-' + index2">
            <span class="checkmark"></span>
            <span>{{ currency.name }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencySelector',
  data() {
    return {
      currencyList: [
        {
          name: "EUR",
          checked: false,
        },
        {
          name: "PLN",
          checked: false,
        },
        {
          name: "GEL",
          checked: false,
        },
        {
          name: "DKK",
          checked: false
        },
        {
          name: "CZK",
          checked: false
        },
        {
          name: "GBP",
          checked: false
        },
        {
          name: "SEK",
          checked: false
        },
        {
          name: "USD",
          checked: false
        },
        {
          name: "RUB",
          checked: false
        }
      ],
      checkedCurrencies: []
    }
  },
  methods: {
    unselectCurrency(item) {
      item.checked = false;
      this.chooseCurrency(item);
    },
    chooseCurrency(item) {
      if (item.checked) {
        this.checkedCurrencies.push(item);
        return;
      }

      this.checkedCurrencies.splice(this.checkedCurrencies.indexOf(item), 1);
    }
  }
}
</script>
