const mockUrls = [
  "https://utfs.io/f/88360e1b-6262-4bf4-afcd-69b36d9b6a29-ohccf2.png",
  "https://utfs.io/f/83c0bec6-e6f5-47c2-b9dd-92f2d7247d70-ujnwye.png",
  "https://utfs.io/f/846aed20-ca22-49b2-8ad7-24a59b09a273-201gtl.webp",
  "https://utfs.io/f/4320d1da-f61c-4a08-9ed8-354c2bf8f8bd-1sj3pb.png",
];

const mockImages = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url,
  };
});
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((item) => {
          return (
            <div key={item.id} className="w-48 border border-white">
              <img src={item?.url} alt="Image" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
