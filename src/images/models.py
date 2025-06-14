from django.db import models

class Client(models.Model):
    numero_tel = models.CharField(max_length=15)

    def __str__(self):
        return self.numero_tel

class Region(models.Model):
    nom_region = models.CharField(max_length=100)

    def __str__(self):
        return self.nom_region

class Ville(models.Model):
    nom = models.CharField(max_length=100)
    frais_livraison = models.DecimalField(max_digits=10, decimal_places=2)
    frequence_livraison = models.CharField(max_length=100)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return self.nom

class Article(models.Model):
    nom = models.CharField(max_length=100)
    couleur = models.CharField(max_length=50)
    pointure = models.CharField(max_length=10)
    prix_unitaire = models.DecimalField(max_digits=10, decimal_places=2)
    categorie = models.CharField(max_length=100)
    qte_disponible = models.IntegerField()

    def __str__(self):
        return self.nom

class Commande(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    date_cmd = models.DateTimeField(auto_now_add=True)
    total_cmd = models.DecimalField(max_digits=10, decimal_places=2)
    adresse = models.TextField()
    motif_annulation = models.TextField(blank=True, null=True)
    etat_paiement = models.BooleanField(default=False)
    is_upsell = models.BooleanField(default=False)

    def __str__(self):
        return f"Commande {self.id}"

class Panier(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    quantite = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.article.nom} x{self.quantite}"

class EnumEtatCommande(models.Model):
    libelle = models.CharField(max_length=100)

    def __str__(self):
        return self.libelle

class EtatCommande(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    etat = models.ForeignKey(EnumEtatCommande, on_delete=models.CASCADE)
    date_debut = models.DateTimeField()
    date_fin = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f"{self.etat.libelle} ({self.commande.id})"

class Operateur(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField()
    mot_de_passe = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.prenom} {self.nom}"

class Operation(models.Model):
    type_operation = models.CharField(max_length=100)
    date_operation = models.DateTimeField(auto_now_add=True)
    conclusion = models.TextField()
    operateur = models.ForeignKey(Operateur, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.type_operation} - {self.date_operation}"
