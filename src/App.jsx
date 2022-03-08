import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Map } from './components/Map'
import useWindowSize from './hooks/useWindowSize.jsx'

const key = 'tInG9rSuOMB4BmMrIMB0JUcI1vPvd'
const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_${key}`

const getURL = input =>
  `https://geo.ipify.org/api/v2/country,city?apiKey=at_${key}&ipAddress=${input}`

const loadInitialData = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json()
  const filteredData = {
    ip: data.ip,
    location: `${data.location?.region}, ${data.location?.country} ${data.as?.asn}`,
    lat: data.location.lat,
    lng: data.location.lng,
    timezone: `UTC ${data.location.timezone}`,
    isp: data.isp,
  }
  return filteredData
}

const serveData = async inputValue => {
  const res = await fetch(getURL(inputValue))
  const data = await res.json()
  const filteredData = {
    ip: data.ip,
    location: `${data.location?.region}, ${data.location?.country} ${data.as?.asn}`,
    lat: data.location?.lat,
    lng: data.location?.lng,
    timezone: `UTC ${data.location?.timezone}`,
    isp: data.isp,
  }
  return filteredData
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const { width } = useWindowSize()
  const [ipData, setIpData] = useState({
    ip: '192.212.174.101',
    location: 'Brooklyn,NY 10001',
    lat: 51.505,
    lng: -0.09,
    timezone: 'UTC -05:00',
    isp: 'SpaceX Starlink',
  })

  const { ip, location, lat, lng, timezone, isp } = ipData

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const promise = inputValue.length
      ? serveData(inputValue)
      : loadInitialData()

    promise
      .then(data => {
        setIpData(data)
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  useEffect(() => {
    loadInitialData()
      .then(data => {
        setIpData(data)
      })
      .catch(err => {
        throw new Error(err)
      })
  }, [])

  return (
    <>
      <header className="min-h-[300px] md:min-h-[308px]"></header>
      <div className="relative z-[9999] pl-5 pr-[2.25rem] md:px-5 pb-20 pt-5">
        <h1 className="font-normal text-white mb-12 sm:mb-10 md:mt-3 md:mb-[1.7rem] text-center text-xl md:text-3xl md:mr-[20px] md:tracking-[0.018em]">
          IP Address Tracker
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center mx-auto  max-w-[35.5rem] mb-4 sm:mb-6 md:mb-[3rem]"
        >
          <input
            type="text"
            className="pt-4 pb-[.8rem] pl-6 pr-[2rem] rounded-l-xl flex-1 text-lg"
            placeholder="Search for any IP address or domain"
            autoComplete="off"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button className=" pl-[1.65rem] pr-[1rem] relative right-[0.85rem] rounded-r-xl bg-black text-white">
            <FaArrowRight />
          </button>
        </form>
        <ul className="py-4 px-8 md:pt-8 md:pb-12 mx-auto md:max-w-[70rem] bg-white rounded-lg flex flex-col md:flex-row space-x-2 md:gap-8 text-center md:text-left">
          {[
            ['IP ADDRESS', ip],
            ['LOCATION', location],
            ['TIMEZONE', timezone],
            ['ISP', isp],
          ].map(([title, value], index) => {
            return (
              <React.Fragment key={index}>
                <li
                  style={{
                    marginLeft: title === 'ISP' && '3.7rem',
                  }}
                >
                  <span className="font-bold text-[12px] text-[hsl(0,0%,59%)] text-center md:text-left">
                    {title}
                  </span>
                  <p className="font-medium text-lg md:text-[1.7rem] md:max-w-[13ch] pt-2">
                    {value}
                  </p>
                </li>
                {width > 768 ? index < 3 ? <hr /> : null : null}
              </React.Fragment>
            )
          })}
        </ul>
      </div>
      <Map coords={{ lat, lng }} />
    </>
  )
}

export default App
