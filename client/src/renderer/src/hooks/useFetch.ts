import { useEffect, useState } from 'react'

export const useFetch = (url: string, opts: object) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(url, opts)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) =>
        setData((...prevData) => {
          return {
            ...prevData,
            data
          }
        })
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return [data, loading, error]
}
