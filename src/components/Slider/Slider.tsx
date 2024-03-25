import { FC, useCallback, useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { useViewport } from '../../hook/useViewport'
import {
  ContentBoxStyled,
  ImageStyled,
  SliderMainImageStyled,
  SliderImageStyled,
  SliderStyles,
  ButtonStyled,
  UlStyled,
  LiStyled,
  TextBoxStyled,
  TitleStyled,
  DescriptionStyled,
  SubmitButton,
} from './styles'

type SliderProps = {
  imagesData: {
    id: number
    title: string
    description: string
    url: string
  }[]
}

const Slider: FC<SliderProps> = ({ imagesData }) => {
  const [mainImage, setMainImage] = useState(imagesData.length)
  const { isMobile, isTablet } = useViewport()
  const data = [...imagesData, ...imagesData, ...imagesData]

  const imgIndexCalc = (
    index: number,
    mainImgIndex: number,
    imgQuantity: number,
  ): number => {
    const queue = !mainImgIndex
      ? index - mainImage
      : index - (mainImgIndex % imgQuantity)
    return queue < -17
      ? queue + imgQuantity
      : queue > 17
      ? queue - imgQuantity
      : queue
  }

  const toScroll = useCallback(
    (amount: number = 1) => {
      if (!amount) return
      setMainImage((prev) => (prev >= data.length - amount ? 0 : prev + amount))
    },
    [data.length],
  )

  useEffect(() => {
    const interval = setTimeout(() => {
      toScroll()
    }, 400000)
    return () => clearTimeout(interval)
  }, [mainImage, toScroll])

  return (
    <>
      <SliderStyles>
        <ButtonStyled
          $isLefSide
          onClick={() => toScroll(isMobile || isTablet ? -1 : -3)}
        >
          <FaArrowLeft />
        </ButtonStyled>
        {data.map(({ title, description, id, url }, index, arr) => {
          const imgIndex = imgIndexCalc(index, mainImage, arr.length)
          return (
            <SliderMainImageStyled
              onClick={() => {
                setMainImage(index)
              }}
              key={`${id}${index}`}
              $imgIndex={imgIndex}
            >
              <SliderImageStyled>
                <ContentBoxStyled>
                  <ImageStyled src={url} alt="img"></ImageStyled>
                  <TextBoxStyled>
                    <TitleStyled $active={imgIndex === 0}>{title}</TitleStyled>
                    <DescriptionStyled $active={imgIndex === 0}>
                      {description}
                    </DescriptionStyled>
                    <SubmitButton>get</SubmitButton>
                  </TextBoxStyled>
                </ContentBoxStyled>
              </SliderImageStyled>
            </SliderMainImageStyled>
          )
        })}
        <ButtonStyled onClick={() => toScroll(isMobile || isTablet ? 1 : 3)}>
          <FaArrowRight />
        </ButtonStyled>
      </SliderStyles>
      <UlStyled>
        {imagesData.map((item, index, arr) => (
          <LiStyled
            key={item.id}
            $active={
              index ===
              (mainImage >= arr.length ? mainImage % arr.length : mainImage)
            }
          >
            <button
              onClick={() => {
                const position =
                  mainImage >= arr.length ? mainImage % arr.length : mainImage
                toScroll(index - position)
              }}
            />
          </LiStyled>
        ))}
      </UlStyled>
    </>
  )
}

export default Slider
