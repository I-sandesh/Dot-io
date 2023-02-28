import React from 'react'

function RegisterID() {
  return (
    <div class="leading-loose">
  <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Attendee information</p>
    <div class="">
      <label class="block text-sm text-gray-00" for="cus_name">Name</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"/>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_email">What are your expectations from this event? </label>
      <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="i want to attend this session..." aria-label="Email"/>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_email">What are your expectations from this event? </label>
      <input class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="i want to attend this session..." aria-label="Email"/>
    </div>
    <p class="mt-4 text-gray-800 font-medium">Payment information</p>
    <div class="">
      <label class="block text-sm text-gray-600" for="cus_name">Card</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"/>
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="block text-sm text-gray-600" for="cus_email">Expiry Date</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="MM/YY" aria-label="Email"/>
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label class="block text-sm text-gray-600" for="cus_email">CVV</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="cvv" aria-label="Email"/>
    </div>
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
    </div>
  </form>
</div>
  )
}

export default RegisterID