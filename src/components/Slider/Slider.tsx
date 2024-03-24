import { FC, useCallback, useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import {
  ContentBoxStyled,
  ImageStyled,
  SliderMainImageStyled,
  SliderImageStyled,
  SliderStyles,
  ButtonStyled,
  UlStyled,
  LiStyled,
} from './styles'
type SliderProps = {
  imagesData: { id: number; url: string }[]
}

const Slider: FC<SliderProps> = ({ imagesData }) => {
  const [mainImage, setMainImage] = useState(imagesData.length)
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
    }, 4000)
    return () => clearTimeout(interval)
  }, [mainImage, toScroll])

  return (
    <>
      <SliderStyles>
        <ButtonStyled $isLefSide onClick={() => toScroll(-3)}>
          <FaArrowLeft />
        </ButtonStyled>
        {data.map(({ id, url }, index, arr) => (
          <SliderMainImageStyled
            onClick={() => {
              setMainImage(index)
            }}
            key={`${id}${index}`}
            $imgIndex={imgIndexCalc(index, mainImage, arr.length)}
          >
            <SliderImageStyled>
              <ContentBoxStyled>
                <ImageStyled src={url} alt="img"></ImageStyled>
              </ContentBoxStyled>
            </SliderImageStyled>
          </SliderMainImageStyled>
        ))}
        <ButtonStyled onClick={() => toScroll(3)}>
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
                console.log(position)
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
