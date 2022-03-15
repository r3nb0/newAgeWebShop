using Microsoft.EntityFrameworkCore;

namespace Cascadus.Model.Models.DBModels
{
    public partial class CascadusDEVContext : DbContext
    {
        public CascadusDEVContext()
        {
        }

        public CascadusDEVContext(DbContextOptions<CascadusDEVContext> options)
            : base(options)
        {
        }

        public virtual DbSet<KategorijaProizvoda> KategorijaProizvoda { get; set; }
        public virtual DbSet<KorisnickiRacun> KorisnickiRacun { get; set; }
        public virtual DbSet<Kupac> Kupac { get; set; }
        public virtual DbSet<PopustKodovi> PopustKodovi { get; set; }
        public virtual DbSet<Proizvod> Proizvod { get; set; }
        public virtual DbSet<Racun> Racun { get; set; }
        public virtual DbSet<Stavka> Stavka { get; set; }
        public virtual DbSet<Email> Emails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                /* #warning To protect potentially sensitive information in your connection string,
                you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 
                for guidance on storing connection strings.*/
                optionsBuilder.UseSqlServer(Configuration.Configuration.CONNECTION_STRING); 
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<KategorijaProizvoda>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");
            });

            modelBuilder.Entity<KorisnickiRacun>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");
            });

            modelBuilder.Entity<Kupac>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Grad)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Ime)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Kontakt)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.KorisnickiRacunId).HasColumnName("KorisnickiRacunID");

                entity.Property(e => e.KucniBroj)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Mail).HasMaxLength(50);

                entity.Property(e => e.PostanskiBroj)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Prezime)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Ulica)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.KorisnickiRacun)
                    .WithMany(p => p.Kupac)
                    .HasForeignKey(d => d.KorisnickiRacunId)
                    .HasConstraintName("FK__Kupac__Korisnick__398D8EEE");
            });

            modelBuilder.Entity<PopustKodovi>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.PopustKod).IsRequired();

                entity.Property(e => e.PopustUpostocima).HasColumnName("PopustUPostocima");

                entity.Property(e => e.VrijediDo).HasColumnType("datetime");

                entity.Property(e => e.Izbrisano).HasColumnType("bit(1)");
            });

            modelBuilder.Entity<Proizvod>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Cijena).HasColumnType("decimal(19, 4)");

                entity.Property(e => e.KarakteristikeProizvoda).IsRequired();

                entity.Property(e => e.KategorijaId).HasColumnName("KategorijaID");

                entity.Property(e => e.Naziv).IsRequired();

                entity.HasOne(d => d.Kategorija)
                    .WithMany(p => p.Proizvod)
                    .HasForeignKey(d => d.KategorijaId)
                    .HasConstraintName("FK__Proizvod__Katego__412EB0B6");
            });

            modelBuilder.Entity<Racun>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DatumIzdavanja).HasColumnType("date");

                entity.Property(e => e.DatumSlanja).HasColumnType("date");

                entity.Property(e => e.KupacId).HasColumnName("KupacID");

                entity.HasOne(d => d.Kupac)
                    .WithMany(p => p.Racun)
                    .HasForeignKey(d => d.KupacId)
                    .HasConstraintName("FK__Racun__KupacID__3C69FB99");
            });

            modelBuilder.Entity<Stavka>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CijenaPoKomadu).HasColumnType("decimal(19, 4)");

                entity.Property(e => e.PopustKodId).HasColumnName("PopustKodID");

                entity.Property(e => e.ProizvodId).HasColumnName("ProizvodID");

                entity.Property(e => e.RacunId).HasColumnName("RacunID");

                entity.Property(e => e.UkupnaCijena).HasColumnType("decimal(19, 4)");

                entity.HasOne(d => d.PopustKod)
                    .WithMany(p => p.Stavka)
                    .HasForeignKey(d => d.PopustKodId)
                    .HasConstraintName("FK__Stavka__PopustKo__52593CB8");

                entity.HasOne(d => d.Proizvod)
                    .WithMany(p => p.Stavka)
                    .HasForeignKey(d => d.ProizvodId)
                    .HasConstraintName("FK__Stavka__Proizvod__44FF419A");

                entity.HasOne(d => d.Racun)
                    .WithMany(p => p.Stavka)
                    .HasForeignKey(d => d.RacunId)
                    .HasConstraintName("FK__Stavka__RacunID__440B1D61");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
