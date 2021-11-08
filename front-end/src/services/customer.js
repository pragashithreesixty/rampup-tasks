import axios from 'axios'

const URL = 'http://localhost:8000/api/customers'

const create = async (dto) => {
  var id = ''

  try {
    const res = await axios.post(URL, 
      dto, {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        }
      }
    )

    id = res.data.id
    console.log('success')
  }
  catch (error) {
    console.log('error logged ' + JSON.stringify(error))
  }

  return {
    id: id
  }
}

export default {create}