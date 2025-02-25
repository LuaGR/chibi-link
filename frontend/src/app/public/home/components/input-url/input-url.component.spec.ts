import { ShortenerService } from "@/services/shortener.service"
import { of } from "rxjs"
import { InputUrlComponent } from "./input-url.component"
import { render, screen } from "@testing-library/angular"
import { userEvent } from "@testing-library/user-event"
import * as isValidUrlModule from "./utilities/is-valid-url"

describe('InputUrlComponent', () => {
  let shortenerServiceMock: jest.Mocked<ShortenerService>

  beforeEach(async () => {
    shortenerServiceMock = {
      postUrl: jest.fn()
    } as unknown as jest.Mocked<ShortenerService>
  })

  delete (window as any).location
  window.location = {href: ''} as any

  it('should call the service and update shortUrl when the URL is valid', async () => {
    //given
    shortenerServiceMock.postUrl.mockReturnValueOnce(of({ url: 'https://www.example.com', shortUrl: 'abc12' }))

    await render(InputUrlComponent, {
      providers: [
        { provide: ShortenerService, useValue: shortenerServiceMock }
      ]
    })

    //when
    await userEvent.type(screen.getByPlaceholderText('Enter the link here'), 'https://www.example.com')
    await userEvent.click(screen.getByRole('button'))

    //then
    expect(shortenerServiceMock.postUrl).toHaveBeenCalledWith('https://www.example.com')
  })

  it('should not call the service and show an alert if the URL is invalid', async () => {
    //given
    jest.spyOn(isValidUrlModule, 'isValidUrl').mockReturnValueOnce(false)
    const alertSpy = jest.spyOn(window, 'alert')

    await render(InputUrlComponent, {
      providers: [
        { provide: ShortenerService, useValue: shortenerServiceMock }
      ]
    })

    //when
    await userEvent.type(screen.getByPlaceholderText('Enter the link here'), 'invalid-url')
    await userEvent.click(screen.getByRole('button'))

    //then
    expect(isValidUrlModule.isValidUrl).toHaveBeenCalledWith('invalid-url')
    expect(alertSpy).toHaveBeenCalledWith('The URL is not in the correct format')
  })
})

