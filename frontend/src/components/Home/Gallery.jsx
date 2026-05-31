const galleryImages = [
  '/home/gallary/img1.jpg',
  '/home/gallary/img2.jpg',
  '/home/gallary/img3.jpg',
  '/home/gallary/img4.jpg',
  '/home/gallary/img5.jpg',
  '/home/gallary/img6.jpg',
  '/home/gallary/img7.jpg',
  '/home/gallary/img8.jpg',
]

const galleryColumns = [
  [galleryImages[0], galleryImages[1]],
  [galleryImages[2]],
  [galleryImages[3], galleryImages[4]],
  [galleryImages[5]],
  [galleryImages[6], galleryImages[7]],
]

const Gallery = () => {
  return (
    <section className="overflow-hidden bg-[#f4efe6] py-[38px] [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="grid w-full grid-cols-5 gap-[20px] max-[900px]:grid-cols-2 max-[900px]:px-5 max-[640px]:grid-cols-1">
        {galleryColumns.map((column, columnIndex) => (
          <div
            key={column.join('-')}
            className={`flex min-w-0 flex-col gap-[20px] ${
              column.length === 1 ? 'pt-[145px] max-[900px]:pt-0' : 'pt-[39px] max-[900px]:pt-0'
            }`}
          >
            {column.map((image) => (
              <div
                key={image}
                className="aspect-[255/282] w-full overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Interior gallery ${galleryImages.indexOf(image) + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
