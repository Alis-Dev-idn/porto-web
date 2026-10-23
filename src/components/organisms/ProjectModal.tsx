import React, { useEffect, useRef, useState } from 'react'
import type { Project, ProjectStatus } from '../../data/types'
import { kindLabel, statusLabel } from '../../lib/badges'
import { Icon } from '../atoms/Icon'
import { Badge } from '../atoms/Badge'
import { Button } from '../atoms/Button'

export interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const statusBadgeVariant: Record<ProjectStatus, 'status-live' | 'status-internal' | 'status-coming-soon'> = {
  live: 'status-live',
  internal: 'status-internal',
  'coming-soon': 'status-coming-soon',
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [prevSlug, setPrevSlug] = useState(project?.slug)

  // Reset active media saat project berubah tanpa cascading effect
  if (project && project.slug !== prevSlug) {
    setPrevSlug(project.slug)
    setActiveMediaIndex(0)
  }

  useEffect(() => {
    if (!project) return

    // 1. Hitung lebar scrollbar sistem saat ini
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    // 2. Simpan styling awal body
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    // 3. Kunci scroll dan beri padding kompensasi jika ada scrollbar (Zero CLS)
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
      const navHeader = document.querySelector('header')
      if (navHeader) {
        navHeader.style.paddingRight = `${scrollbarWidth}px`
      }
    }
    document.body.style.overflow = 'hidden'

    // Focus close button on mount
    closeButtonRef.current?.focus()

    // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (project.gallery && project.gallery.length > 1) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : project.gallery!.length - 1))
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          setActiveMediaIndex((prev) => (prev < project.gallery!.length - 1 ? prev + 1 : 0))
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
      const navHeader = document.querySelector('header')
      if (navHeader) {
        navHeader.style.paddingRight = ''
      }
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  if (!project) return null
  const { caseStudy } = project
  const gallery = project.gallery ?? []
  const hasGallery = gallery.length > 0
  const currentMedia = hasGallery ? (gallery[activeMediaIndex] ?? gallery[0]) : null

  const handlePrevMedia = () => {
    if (!hasGallery) return
    setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))
  }

  const handleNextMedia = () => {
    if (!hasGallery) return
    setActiveMediaIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex animate-fade items-center justify-center bg-ink/60 p-3 sm:p-4 md:p-6 backdrop-blur-sm"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92dvh] w-full max-w-[768px] animate-rise flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-2xl"
      >
        {/* Tombol Tutup X */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup detail modal"
          title="Tutup (Esc)"
          className="grid h-11 w-11 place-items-center rounded-md border border-line text-head absolute right-4 top-4 z-20 bg-card/90 backdrop-blur-xs transition duration-150 hover:border-line2 hover:bg-soft active:scale-[0.95] cursor-pointer"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="modal-scroll overflow-y-auto p-[clamp(20px,4.5vw,36px)]">
          {/* Header Metadata */}
          <div className="mb-3.5 flex flex-wrap items-center gap-2 pr-12">
            <span className="text-[12.5px] font-semibold tracking-wide text-muted">
              {project.contextLabel}
            </span>
            <Badge variant={statusBadgeVariant[project.status]} size="sm">
              {statusLabel[project.status]}
            </Badge>
            <Badge variant="accent" size="sm">
              {kindLabel[project.kind]}
            </Badge>
          </div>

          <h2
            id="modal-title"
            className="pr-12 text-h2 font-bold text-head"
          >
            {project.name}
          </h2>

          <p className="mt-3 text-body leading-relaxed">{project.description}</p>

          {/* Tombol CTA Demo Utama (Atas) */}
          {project.url && (
            <div className="mt-5">
              <Button
                asLink
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                variant="primary"
                size="md"
                icon={<Icon name="external" size={16} />}
                className="w-full sm:w-auto shadow-md"
              >
                Kunjungi Live Demo Interaktif
              </Button>
            </div>
          )}

          {/* ZONA MEDIA SHOWCASE & GALERI */}
          {hasGallery && currentMedia && (
            <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-line bg-soft/40 p-3 sm:p-4">
              {/* Hero Display Frame (Aspek 16:9 terkunci untuk zero CLS) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-slate-900/10 dark:bg-slate-950/50 shadow-inner">
                <img
                  key={currentMedia.src}
                  src={currentMedia.src}
                  alt={currentMedia.title}
                  width={1920}
                  height={1080}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-top animate-fade"
                />
              </div>

              {/* Caption Bar */}
              <div className="px-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-semibold text-head">
                    {currentMedia.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[11.5px] text-muted">
                    {activeMediaIndex + 1} / {gallery.length}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  {currentMedia.caption}
                </p>
              </div>

              {/* Interactive Thumbnail Carousel Strip */}
              {gallery.length > 1 && (
                <div className="mt-1 flex items-center gap-2 pt-2 border-t border-line/60">
                  <button
                    type="button"
                    onClick={handlePrevMedia}
                    aria-label="Foto sebelumnya"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-card text-head transition duration-150 hover:border-accent hover:text-accent active:scale-95 cursor-pointer"
                  >
                    <Icon name="chevron-left" size={18} />
                  </button>

                  <div className="flex flex-1 gap-2 overflow-x-auto py-1 scrollbar-none">
                    {gallery.map((media, idx) => {
                      const isActive = idx === activeMediaIndex
                      return (
                        <button
                          key={media.src}
                          type="button"
                          onClick={() => setActiveMediaIndex(idx)}
                          aria-label={`Pilih gambar ${idx + 1}: ${media.title}`}
                          className={`relative aspect-[16/10] w-20 sm:w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-150 cursor-pointer ${
                            isActive
                              ? 'border-accent ring-2 ring-accent/30 ring-offset-2 ring-offset-card opacity-100 scale-[1.02]'
                              : 'border-line opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={media.src}
                            alt=""
                            width={160}
                            height={100}
                            loading="lazy"
                            className="h-full w-full object-cover object-top"
                          />
                        </button>
                      )
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextMedia}
                    aria-label="Foto berikutnya"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-card text-head transition duration-150 hover:border-accent hover:text-accent active:scale-95 cursor-pointer"
                  >
                    <Icon name="chevron-right" size={18} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ZONA STUDI KASUS */}
          <div className="mt-8 flex flex-col gap-6">
            {caseStudy.problem && (
              <Block title="Problem Statement">{caseStudy.problem}</Block>
            )}
            <Block title="Konteks">{project.contextLabel}</Block>
            <Block title="Peran Saya">{caseStudy.role}</Block>

            <div>
              <BlockTitle>Tech Stack</BlockTitle>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Badge key={s} variant="mono" size="sm">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            {caseStudy.features && caseStudy.features.length > 0 && (
              <div>
                <BlockTitle>Key Features</BlockTitle>
                <ul className="flex flex-col gap-2 p-0 list-none">
                  {caseStudy.features.map((f) => (
                    <li key={f} className="relative pl-5.5 text-body leading-snug">
                      <span className="absolute left-1 top-[9px] h-1.5 w-1.5 rounded-full bg-accent2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {caseStudy.challenge && (
              <Block title="Tantangan & Solusi">{caseStudy.challenge}</Block>
            )}
            {caseStudy.impact && (
              <Block title="Hasil / Impact">{caseStudy.impact}</Block>
            )}

            {/* Bottom CTA Banner */}
            {project.url && (
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-line bg-soft/70 p-4">
                <div>
                  <p className="text-sm font-semibold text-head">Ingin mengeksplorasi langsung aplikasi ini?</p>
                  <p className="text-xs text-muted">Akses lingkungan demo interaktif yang berjalan di cloud produksi.</p>
                </div>
                <Button
                  asLink
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="primary"
                  size="md"
                  icon={<Icon name="external" size={16} />}
                  className="shrink-0 w-full sm:w-auto"
                >
                  Buka Live Demo
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-2 text-[13px] font-semibold uppercase tracking-wider text-accent">
      {children}
    </h4>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <BlockTitle>{title}</BlockTitle>
      <p className="text-body leading-relaxed">{children}</p>
    </div>
  )
}
