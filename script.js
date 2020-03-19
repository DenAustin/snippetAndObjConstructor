  useEffect(() => {
    const url = 'url'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountries(data)
      })
  }, [])