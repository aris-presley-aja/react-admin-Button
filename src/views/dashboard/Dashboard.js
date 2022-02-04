import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  CFormSwitch,
  CButton,
  CPopover,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CRow,
  CFormInput,
  CInputGroup,
  CListGroup,
  CListGroupItem,
  CInputGroupText,
} from '@coreui/react'

const ChecksRadios = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          {/* <DocsCallout name="Check and Radios" href="forms/checks-radios" /> */}
          Make a RadioButton Component with React Code and the following features:
        </CCol>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Checks and Radios</strong> <small>Inline</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                1. Take a prop that can display Labels <code>&lt;CFormCheck&gt;</code>.
              </p>
              Name
              <br />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox1"
                value="option1"
                label="Radio A"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option2"
                label="Radio B"
              />
            </CCardBody>
            <CCardBody>
              Name
              <br />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox1"
                value="option1"
                label="Radio A"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option2"
                label="Radio B"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox3"
                value="option3"
                label="Radio C (disabled)"
                disabled
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* soal ke 2 */}
      <CRow>
        <CCol xs={12}>
          {/* <DocsCallout name="Check and Radios" href="forms/checks-radios" /> */}
          2. Can take in subcomponents so that each radio button
        </CCol>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>a. Text-Field Components:</strong> <small>Inline</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                is flexible in showing itssub-components<code>&lt;CFormCheck&gt;</code>.
              </p>
              <CListGroup className="mb-2">
                Text Field Component
                <CListGroupItem>
                  <CPopover
                    class="w-25 p-3"
                    inline
                    content="And here’s some amazing content. It’s very engaging. Right?"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineCheckbox1"
                    value="option1"
                    label="1"
                    placement="bottom"
                  >
                    <CInputGroup>
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox2"
                        value="option1"
                        class="w-25 p-1"
                        label=""
                      />
                      <CFormInput
                        placeholder="Hey"
                        aria-label="Recipient&#39;s username"
                        class="w-25 p-3"
                        aria-describedby="basic-addon2"
                      />
                    </CInputGroup>
                  </CPopover>
                </CListGroupItem>
              </CListGroup>
              <br />
            </CCardBody>
            <CCardBody>
              Tooltip Button Component
              <br />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option2"
                class="w-25 p-1"
                label=""
              />
              <CPopover
                title="Popover title"
                content="And here’s some amazing content. It’s very engaging. Right?"
                placement="right"
              >
                <CButton color="danger" size="lg">
                  Click to toggle popover
                </CButton>
              </CPopover>
            </CCardBody>
            <CCardBody>
              RadioButton Plaintext Component
              <br />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option3"
                class="w-25 p-1"
                label=""
              />
              Representative Form
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* Soal ke 3 */}
      <CRow>
        <CCol xs={12}>
          {/* <DocsCallout name="Check and Radios" href="forms/checks-radios" /> */}
          2. Can take in subcomponents so that each radio button
        </CCol>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>b. Date-Field Components:</strong> <small>Inline</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                is flexible in showing itssub-components<code>&lt;CFormCheck&gt;</code>.
              </p>
              <CListGroup className="mb-2">
                inner DatePicker Component
                <CListGroupItem>
                  <CRow xs={{ cols: 6 }}>
                    <CCol>
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox2"
                        value="option2"
                        label=""
                      />
                    </CCol>
                    <CCol>
                      <DatePicker locale="es" />
                    </CCol>
                    <CCol></CCol>
                  </CRow>
                </CListGroupItem>
                <CListGroupItem>
                  <CRow xs={{ cols: 4 }}>
                    <CCol>
                      <CFormCheck
                        inline
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineCheckbox2"
                        value="option2"
                        label=""
                      />
                    </CCol>
                    <CCol>Representative Form</CCol>
                    <CCol></CCol>
                  </CRow>
                </CListGroupItem>
              </CListGroup>
              <br />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          {/* <DocsCallout name="Check and Radios" href="forms/checks-radios" /> */}
          2. Can take in subcomponents so that each radio button
        </CCol>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>c. Other SubComponents:</strong> <small>Inline</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Even other Sub Components<code>&lt;CFormCheck&gt;</code>.
              </p>
              <CListGroup className="mb-2">
                inner DatePicker Component
                <CListGroupItem>
                  <CRow xs={{ cols: 6 }}>
                    Subcomponents!
                    <CInputGroup>
                      <CInputGroupText>
                        <CFormCheck
                          type="radio"
                          value="option8"
                          aria-label="Radio button for following text input"
                        />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        class="w-25 p-3"
                        placeholder="hey"
                        aria-label="Disabled input example"
                        disabled
                      />
                    </CInputGroup>
                    Inner Components
                  </CRow>
                </CListGroupItem>
                <CListGroupItem>
                  <CRow xs={{ cols: 6 }}>
                    Subcomponents!
                    <CInputGroup>
                      <CFormInput
                        class="w-25 p-3"
                        aria-label="Text input with radio button"
                        label="yo"
                      />
                    </CInputGroup>
                    Inner Components
                  </CRow>
                </CListGroupItem>
                <CRow xs={{ cols: 3 }}>
                  Subcomponents!
                  <CInputGroup>
                    <CFormCheck
                      inline
                      class="w-25 p-3"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox100"
                      value="option1"
                      label=""
                    />

                    <CCol>
                      <CFormInput
                        type="text"
                        class="w-75 p-3"
                        placeholder="hey"
                        aria-label="Disabled input example"
                        id="formSwitchCheckDefault"
                        disabled
                      />
                    </CCol>
                    <CCol>
                      <CFormSwitch
                        label="Default switch checkbox input"
                        id="formSwitchCheckDefault"
                      />
                    </CCol>
                    <CCol></CCol>
                  </CInputGroup>
                  Inner Components
                </CRow>
                <CRow xs={{ cols: 1 }}>
                  Last One Subcomponents!
                  <CInputGroup>
                    <CFormCheck
                      inline
                      class="w-25 p-3"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox100"
                      value="option1"
                      label=""
                    />

                    <CCol>
                      <CButton
                        type="text"
                        class="w-75 p-3"
                        placeholder="hey"
                        aria-label="Disabled input example"
                        id="formSwitchCheckDefault"
                        disabled
                      />
                    </CCol>
                    <CCol>
                      <CButton label="Default switch checkbox input" id="Disable_Button" />
                    </CCol>
                    <CCol>
                      <CButton label="Default switch checkbox input" id="Enable_Button" />
                    </CCol>
                    <CCol></CCol>
                  </CInputGroup>
                </CRow>
              </CListGroup>
              <br />
              <CFormInput />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ChecksRadios
