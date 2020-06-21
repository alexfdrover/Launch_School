=begin
  Input: string
  Output: array of strings
  Examples: Given in test suite
  Algo:
  make lookup table
  take strand, break into codons
  for each codon, check the lookup table for it's name
    list each protein encountered until STOP is encountered
  squish the list to remove duplicate names
=end
class InvalidCodonError < StandardError; end

class Translation
  LOOKUP_TABLE = { 'AUG' => 'Methionine',     'UGG' => 'Tryptophan',
                   'UUU' => 'Phenylalanine',  'UUC' => 'Phenylalanine',
                   'UUA' => 'Leucine',        'UUG' => 'Leucine',
                   'UCU' => 'Serine',         'UCC' => 'Serine',
                   'UCA' => 'Serine',         'UCG' => 'Serine',
                   'UAU' => 'Tyrosine',       'UAC' => 'Tyrosine',
                   'UGU' => 'Cysteine',       'UGC' => 'Cysteine',
                   'UAA' => 'STOP',           'UAG' => 'STOP',
                   'UGA' => 'STOP' }

  def self.of_codon(codon)
    LOOKUP_TABLE.fetch(codon) { fail InvalidCodonError }
  end

  def self.of_rna(strand)
    codon_arr = []
    strand.chars.each_slice(3) { |a| codon_arr << a.join }
    codon_arr.take_while do |codon|
      Translation.of_codon(codon) != 'STOP'
    end.uniq.map { |codon| Translation.of_codon(codon) }
  end
end
