/* The signup page will create a new customer that will be added
 * to the customers table. */

import styled from 'styled-components'
import { useState } from 'react'

import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import Spinner from '../components/Spinner'

import { FormFields, FormField } from '../components/Form'
import Input from '../components/Input'
import { LargeButton } from '../components/styles/Button'
import Divider from '../components/styles/Divider'

const StyledStatus = styled.span`
  font-weight: 700;
  margin-left: 2.4rem;
`

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // Inserting a customer into the customers table
  const addCustomer = async e => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      firstName,
      lastName,
      email,
      phone
    }

    try {
      const response = await fetch('/api/customers/add-customer', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      setStatus(res)

      if (!res.statusNo) {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // Returning the page to be displayed
  return (
    <Page>
      <PageBanner bannerUrl="/banners/signup-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Become a Hawkins Library Patron">
          <p>
            We would love for you to join our library! As a patron, you get exclusive crazy once in
            a life time never before seen vip limited time offer curated privileged access to our
            vast 8 book collection. Did I look up synonnyms for 'exclusive' after running out? Yes
            but it wasn't helpful. Could I have used Lorem Ipsum instead? Yes. Is writing all of
            this a waste of time? Nobody answer that.
          </p>
          <Divider />

          <form onSubmit={addCustomer}>
            <FormFields>
              <FormField>
                <label>First Name *</label>
                <br />
                <Input
                  type="text"
                  placeholder="Michael"
                  value={firstName}
                  name="firstName"
                  id="firstName"
                  onChange={e => {
                    setFirstName(e.target.value)
                  }}
                  required
                />
              </FormField>
              <FormField>
                <label>Last Name *</label>
                <br />
                <Input
                  type="text"
                  placeholder="Scott"
                  value={lastName}
                  name="lastName"
                  id="lastName"
                  onChange={e => {
                    setLastName(e.target.value)
                  }}
                  required
                />
              </FormField>
              <FormField>
                <label>Email *</label>
                <br />
                <Input
                  type="email"
                  placeholder="michaelscott@dundermifflin.com"
                  value={email}
                  name="email"
                  id="email"
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  required
                />
              </FormField>
              <FormField>
                <label>Phone *</label>
                <br />
                <Input
                  type="tel"
                  placeholder="1234567890"
                  value={phone}
                  name="phone"
                  id="phone"
                  onChange={e => {
                    setPhone(e.target.value)
                  }}
                  required
                />
              </FormField>
            </FormFields>
            <LargeButton>
              Become a Member <i className="material-icons">arrow_forward_ios</i>
            </LargeButton>
            <StyledStatus>
              {isLoading ? (
                <Spinner />
              ) : (
                status && (
                  <span className={status.statusNo ? 'status--error' : 'status--ok'}>
                    {status.message}
                  </span>
                )
              )}
            </StyledStatus>
          </form>
        </PageContent>
      </Layout>
    </Page>
  )
}

export default Signup
