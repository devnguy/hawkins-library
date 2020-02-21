import { useState } from 'react'

import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'

import { FormFields } from '../components/Form'
import Input from '../components/Input'
import Button from '../components/styles/Button'

const Signup = () => {
  const url = `http://localhost:3000`
  const isEditable = true

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const addCustomer = async (e) => {
    e.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
      phone,
    }

    try {
      const response = await fetch(`${url}/add-customer`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const customerData = await response.json()
      console.log(customerData)

      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')

    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Post request to server. Insert customer into db.
   */
  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Become a Hawkins Library Patron">
          <p>
            Fill out the form below to become a member of Hawkins Public Library.
          </p>

          <form onSubmit={addCustomer}>
            <FormFields>
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                name="firstName"
                id="firstName"
                onChange={(e) => { setFirstName(e.target.value) }}
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                name="lastName"
                id="lastName"
                onChange={(e) => { setLastName(e.target.value) }}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                id="email"
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={phone}
                name="phone"
                id="phone"
                onChange={(e) => { setPhone(e.target.value) }}
              />
            </FormFields>
            <Button>Become a Member!</Button>
          </form>

        </PageContent>
      </Layout>
    </Page>
  )
}

export default Signup