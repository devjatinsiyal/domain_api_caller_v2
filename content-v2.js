console.log('changing content js', document.location.hostname)
document.body.style.backgroundColor = 'green';
const callApi = async () =>{
        const apiUrl = 'https://enbsjss62wzmf.x.pipedream.net';
        const data = {
          domain: document.location.hostname,
        };
        const headers = {
          'Content-Type': 'application/json',
        };
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
        };
        try {
          const response = await fetch(apiUrl, requestOptions);
          if (!response.ok) throw new Error('Network response was not ok');
          const jsonData = await response.json();
          console.log('API response:-->>>>',jsonData);
        } catch (error) {
          console.error('Fetch error:', error);
        }
}

(async() => {
    await callApi()
})()