import {
  DescriptionArea,
  ImageArea,
  ImageCard,
  Project,
  Tag,
  TagsArea,
} from './styles'

export function ProjectCard() {
  return (
    <Project data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <section>
        <TagsArea>
          <Tag>React</Tag>
        </TagsArea>

        <DescriptionArea>
          <h2>Codify</h2>
          <h3>Placement platorm for new Candidates</h3>
        </DescriptionArea>
      </section>

      <ImageArea bg="Codify">
        <ImageCard
          src="https://s3-alpha-sig.figma.com/img/a27a/0e10/4cbdefe373b48f5b3ea28d9d04834184?Expires=1669593600&Signature=Z-2cr6vCcTcYQPdbB7I1A~7hbrPfjd9dUsAoTrxLCtm23m3oJeFGGQLG6mqKXvfMS6xNdJdrBRYcS3SlUzi9JdCBuuVJg715kJhYTEsE1yNx5PvAzttDT5tcHT9Y37~ARaScTtIRMSF0Ow4CL5mdVJh6WVgtqwsZ3S1M-rVssoN-S2wxgA6Ub2lEwMrDP~QcWLJrpdSMmpl0tD6eV08zOhrNrpkrfE4YzMDf-T7EvRK5VVZCByHDtveYD2dEMaUcS9wilmo-gilVGXNQzSuE~AcwPLk8YLsgR9NYaKDgux3PKt3GuduwQ9OXhs~sJZ~PPCG859rObQoGP3CWV97ogQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          width={527}
          height={274}
          alt=""
        />
      </ImageArea>
    </Project>
  )
}
