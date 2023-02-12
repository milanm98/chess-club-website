import React from 'react'

export default function Registration() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const response = await fetch(e.target.action, {
      method: 'POST',
      body: formData,
    })
    const result = await response.json()
    if (result.result === 'error') {
      console.error(result.msg)
    } else {
      console.log('Successfully subscribed!')
    }
  }
  return (
    // max-w-sm rounded overflow-hidden shadow-2xl relative card-bg-color
    <div className="my-24">
      <div className="w-full m-auto px-4 py-4 mt-6 overflow-hidden  card-bg-color shadow-2xl sm:max-w-md sm:rounded-lg">
        <form
          action="https://app.us11.list-manage.com/subscribe/post"
          method="post"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="u" value="8be462bec0e6bbe542b6d250f" />
          <input type="hidden" name="id" value="c7819fe2e5" />
          <h3 className="py-4">
            Prijavom putem ove forme dobijaćete email obaveštenja o najnovijim
            dešavanjima i turnirima.
          </h3>
          <div>
            <label
              htmlFor="b_name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Ime i Prezime
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="b_name"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="b_email"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Email adresa
            </label>
            <div className="flex flex-col items-start">
              <input
                type="email"
                name="b_email"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Prijavi se
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
